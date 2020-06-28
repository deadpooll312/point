import React, {useCallback, useEffect, useState, Fragment} from "react";
import {Table} from "antd";
import {inject, observer} from "mobx-react";
import {clusterColumns} from "../../../../consts/parks.const";
import {PaginateComponent} from "../../../../components/paginate.component";
import {getPageCount} from "../../../../services/pagination.helper";
import {ClusterLoader} from "./cluster-components/cluster.loader";
import {ClusterImage} from "./cluster-components/cluster.image";
import {ClusterVideo} from "./cluster-components/cluster.video";

const CVideos = ({videos}) => {
  return (
    <div>
      {videos.map((link, index) => (
        <ClusterVideo key={`${index}${link}`} link={link} />
      ))}
    </div>
  );
};

const urls = [
  `https://cdn-gateway-03-echd.mos.ru:3443/73ZQHVSWLOQS2RYCM7YW734MJ77XXRVTBV7G77OSLAQBBAHV4NAVNBPDKTMNHZSNDHIO6YS32ZQ7LAJOJ5SPFCOTAADAFOUBJE4BVSXFNH6BOBZXYCOQ67IX67ZHOHPBESPRII3CL2BB3XEYTGM36IO2IUJMJ63N7WSRTQTEQATH5QAXWA672TMWKPKVWPBIEOUR6LGCZLVQCYZRMNN5BX2SZZY4AHN2WLI67RKRD2JVG7VOO24TVCRQXYZHS4XXBEE57RFULGLB5XVYEGH4UMKM5XQOYBFYCBV4LDLMBH6T2XT6VVDBPQ3A2LNBYKHBDN5R27GOCAGFM/f7a2dbc3-0206-4ded-acf7-663deac744d5?recarchive`,
  // `https://cdn-gateway-02-echd.mos.ru:3443/47DX4YVHYCJJUBRPUUMF5FYHX77XXRVTBV7G77OSLAQBBAHV4NAZ3GH7R4LRQQD4MWJLLV3D4TZPI3NMPGJ3ULFKCMR7RXSQJWHQ2OHJ74HHYFFKKNBDX6RANQVPKHQULPPWLLSGWJDK5IGDXPAXRYBCMCI5WK56SDSUKAVSALOR3FMI36MU7LH5ZNYGUFPI6S4C2OPZM3BRZTDGZCKCRWSGEKVXXPSSWDSC4QOP5AEAMKGSWO5OTIAB2WLR5RNBE2DTYFKQLZKRVP72WQW2INQSNQ/e9a9e293-0d44-4ef3-842f-a2ef9599c655?recarchive`,
  // `https://cdn-gateway-03-echd.mos.ru:3443/73ZQHVSWLOQS2RYCM7YW734MJ77XXRVTBV7G77OSLAQBBAHV4NA4MPXA33EX62O2GCEGKRT6CQJTBC7TUXWELY45LAQGDCRUNW43NT5WJ7ZLWCE34AHS2ZQDXIAESEPDSN5LQYKXQTMW25HQA6LOPQRA7VZ2TFKNOLGJKU2ICJ4OM7XSURXDSVEFOK2RIW77UNIALJO3WTWBXTF4CWI3SXGEVLNVZ2HQPXJSU3GTA4G2KEHZR6KKLZ4P4IJI3L7CEER2WWQRGEWO4U5OZHRLE657WZT677RTFTTB53FYMAQWNSU2NMOA/e93d6560-57a4-4fbd-ad2f-f583d43e53df?recarchive`,
];
export const ParkCluster = inject("store")(
  observer(({store: {parks, map}}) => {
    const [videos, setVideos] = useState(urls);
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
                expandedRowRender: (record) => {
                  return (
                    <Fragment>
                      <ClusterImage url={record.fileUrl} />
                      <div className="videos">
                        {videos.length ? (
                          <CVideos videos={videos} />
                        ) : (
                          "Камеры отсутствуют"
                        )}
                      </div>
                    </Fragment>
                  );
                },
                onExpand: (e, record) => {
                  setKeys([record.recordId]);
                },
              }}
              dataSource={parks.clusters.map((item) => ({...item, key: item.recordId}))}
              pagination={false}
              rowClassName={(record) =>
                new Date() > new Date(record.actualTo) ? "gray" : null
              }
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
