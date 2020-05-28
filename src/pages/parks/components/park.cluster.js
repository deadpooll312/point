import React, {useEffect, useCallback} from "react";
import {Table} from "antd";
import {inject, observer} from "mobx-react";
import {clusterColumns} from "~/consts/parks.const";
import {PaginateComponent} from "../../../components/paginate.component";

export const ParkCluster = inject("store")(
  observer(({store: {parks}}) => {
    useEffect(() => {
      parks.updateClusterParams({id: parks.selectedPark.id});
      parks.getClusters();
    }, [parks]);

    const onPaginate = useCallback(
      (value) => {
        parks.updateClusterParams({page: value - 1});
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
        <PaginateComponent count={10} totalItemsCount={750} onChange={onPaginate} />
      </div>
    );
  })
);
