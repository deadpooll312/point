import React, {useCallback, useEffect, useState} from "react";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import update from "immutability-helper";
import {Drawer} from "antd";
import {inject, observer} from "mobx-react";
// local files
import {DragCard} from "../../../components/drag.card";
import {ParkDrawButtons} from "./park.draw.buttons";

export const ParksDrawer = inject("store")(
  observer(({store: {sidebar, parks}}) => {
    const setIndex = (data) => data.slice().map((item, index) => ({...item, index}));

    const [cards, setCards] = useState(setIndex(parks.columns));

    const onClose = useCallback(() => {
      sidebar.toggleDrawer(false);
    }, [sidebar]);

    const moveCard = useCallback(
      (dragIndex, hoverIndex) => {
        const dragCard = cards[dragIndex];
        setCards(
          update(cards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard],
            ],
          })
        );
      },
      [cards]
    );

    const onChange = useCallback(
      (e, index) => {
        const isActive = e.target.checked;
        const updatedCards = cards.map((item, i) =>
          i === index ? {...item, isActive} : item
        );
        setCards(updatedCards);
      },
      [cards]
    );

    useEffect(() => {
      setCards(setIndex(parks.columns));
    }, [parks.columns]);

    return (
      <Drawer
        className="draw"
        width={300}
        title="Настройки таблицы"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={sidebar.showDrawer}
      >
        <DndProvider backend={HTML5Backend}>
          {cards.map((card, index) => {
            return (
              <DragCard
                key={card.index}
                index={index}
                id={card.id}
                onChange={onChange}
                isActive={card.isActive}
                text={card.title}
                moveCard={moveCard}
              />
            );
          })}
        </DndProvider>
        <ParkDrawButtons parks={parks} cards={cards} />
      </Drawer>
    );
  })
);
