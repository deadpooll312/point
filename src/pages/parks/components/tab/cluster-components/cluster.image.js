import React from "react";
import {ImageViewer} from "../../../../../components/image-viewer";

export const ClusterImage = ({url}) => {
  return url ? (
    <div className="parks-clusters-thumb">
      <ImageViewer url={url}>
        <img src={url} width={100} className="clusters-img" />
      </ImageViewer>
    </div>
  ) : (
    <div className="clusters-img-empty">Материалы отсутствуют</div>
  );
};
