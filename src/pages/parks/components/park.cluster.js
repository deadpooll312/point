import React, {useEffect, useCallback} from "react";
import {Table} from "antd";
import {inject, observer} from "mobx-react";
import {clusterColumns} from "~/consts/parks.const";
import {PaginateComponent} from "../../../components/paginate.component";
import {getPageCount} from "../../../services/pagination.helper";

export const ParkCluster = inject("store")(
  observer(({store: {parks}}) => {
    useEffect(() => {
      parks.updateClusterParams({id: parks.selectedPark.id});
      parks.getClusters();
    }, [parks]);

    const onPaginate = useCallback(
      (isNext) => {
        const page = getPageCount(parks.clusterParams.page, isNext);

        parks.updateClusterParams({page});
        parks.getClusters();
      },
      [parks]
    );

    return (
      <div className="park-cluster">
        <Table
          columns={clusterColumns}
          expandIconColumnIndex={-2}
          expandIcon={() => null}
          expandIconAsCell={false}
          expandRowByClick={true}
          defaultExpandAllRows={false}
          // expandable={{
          //   expandedRowRender: (record) => <p style={{margin: 0}}>{record.name}</p>,
          //   onExpand: (e, record) => console.log(record.key),
          // }}
          dataSource={parks.clusters.map((item) => ({...item, key: item.recordId}))}
          pagination={false}
        />
        <PaginateComponent
          hasNextPage={parks.hasClustersNextPage}
          onChange={onPaginate}
        />
      </div>
    );
  })
);
