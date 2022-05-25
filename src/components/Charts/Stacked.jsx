import React from 'react';
import { ChartComponent,
  SeriesCollectionDirective, 
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
  Chart
} from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';


const Stacked = ({height,width}) => {
  return (
    <ChartComponent
      width={width}
      height={height}
      id="StackedChart"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis = {stackedPrimaryYAxis}
      chartArea={{border:{width:0}}}
      tooltip={{
        enable:true
      }}
      className="dark:bg-secondary-dark-bg"
    >
      <Inject services={[Legend, Category, StackingColumnSeries,Tooltip]}/>
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item,index)=><SeriesDirective key={index} {...item}/> )}
      </SeriesCollectionDirective>

    </ChartComponent>
  )
}

export default Stacked