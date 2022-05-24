import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ currentColor, color, id, height, width, data, type }) => {
  return (

    <SparklineComponent
      id={id}
      height={height}
      lineWidth={3}
      valueType="Numeric"
      border={{color:currentColor,width:2}}
      fill={color}
      width={width}
      tooltipSettings={{
        visible: true,
        format:'${x} :  data ${yval}',
        trackLineSettings:{
          visible:true,
        }
      }}
      dataSource={data}
      xName="x"
      yName="yval"
      type="Line"
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
