import React, {useCallback} from "react";
import {inject, observer} from "mobx-react";
import {PaginationComponent} from "~/components/pagination";
import {ParksActionButtons} from "./parks.action.button";
import {warningModalNames} from "~/consts/modal.const";

export const ParksActions = inject("store")(
  observer(({store: {parks}}) => {
    const onSelectedItems = useCallback(
      (open) => {
        if (parks.selectedItems.length) {
          openPark(open);
        }
      },
      [parks.selectedItems]
    );

    const openPark = useCallback(
      (open) => {
        if (open) {
          parks.setWarningModalName(warningModalNames.openCouple);
        } else {
          parks.setWarningModalName(warningModalNames.closedCouple);
        }
      },
      [parks]
    );

    return (
      <div className="parks__header">
        <ParksActionButtons parks={parks} onSelectedItems={onSelectedItems} />
        <PaginationComponent />
      </div>
    );
  })
);
