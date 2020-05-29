import React, {useCallback, useState} from "react";
import {inject, observer} from "mobx-react";
import {PaginationComponent} from "~/components/pagination";
import {ParksActionButtons} from "./parks.action.button";
import {warningModalNames} from "~/consts/modal.const";

export const ParksActions = inject("store")(
  observer(({store: {parks}}) => {
    const [isForOpening, setOpening] = useState(false);

    const onSelectedItems = useCallback(
      (open) => {
        if (parks.selectedItems.length) {
          setOpening(open);
          openPark();
        }
      },
      [parks.selectedItems]
    );

    const openPark = useCallback(() => {
      if (isForOpening) {
        parks.setWarningModalName(warningModalNames.closedCouple);
      } else {
        parks.setWarningModalName(warningModalNames.openCouple);
      }
    }, [parks, isForOpening]);

    return (
      <div className="parks__header">
        <ParksActionButtons parks={parks} onSelectedItems={onSelectedItems} />
        <PaginationComponent />
      </div>
    );
  })
);
