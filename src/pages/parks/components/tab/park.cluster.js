import React, {useCallback, useEffect, useState} from "react";
import {Table} from "antd";
import {inject, observer} from "mobx-react";
import {clusterColumns} from "../../../../consts/parks.const";
import {PaginateComponent} from "../../../../components/paginate.component";
import {getPageCount} from "../../../../services/pagination.helper";
import {ClusterLoader} from "./cluster-components/cluster.loader";
import {ClusterImage} from "./cluster-components/cluster.image";

export const ParkCluster = inject("store")(
  observer(({store: {parks, map}}) => {
    const [keys, setKeys] = useState();

    useEffect(() => {
      parks.updateClusterParams({id: parks.selectedPark.id});
      parks.getClusters();
    }, [parks]);

    useEffect(() => {
      if (map.polygonRecordId) {
        setKeys([map.polygonRecordId]);
      }
    }, [map.polygonRecordId]);

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
        {parks.clustersIsLoading ? (
          <>
            <Table
              columns={clusterColumns}
              expandIconColumnIndex={-2}
              expandIcon={() => null}
              expandIconAsCell={false}
              expandRowByClick={true}
              expandable={{
                expandedRowKeys: keys,
                // eslint-disable-next-line react/display-name
                expandedRowRender: (record) => <ClusterImage url={record.fileUrl} />,
                onExpand: (e, record) => {
                  setKeys([record.recordId]);
                },
              }}
              dataSource={parks.clusters.map((item) => ({...item, key: item.recordId}))}
              pagination={false}
            />
            <PaginateComponent
              hasNextPage={parks.hasClustersNextPage}
              onChange={onPaginate}
            />
          </>
        ) : (
          <ClusterLoader />
        )}
      </div>
    );
  })
);
