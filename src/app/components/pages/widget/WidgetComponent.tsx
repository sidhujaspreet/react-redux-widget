import * as React from "react";
import './WidgetComponent.scss';
import {InfoText} from "../../common/info-text/InfoText";

class WidgetComponent extends React.Component<any, any> {
  
  constructor(props: any) {
    super(props);
    this.getData = this.getData.bind(this);
    this.state = {
      data: null
    };
  }
  
  getData() {
    this.props.fetchWeatherData();
  }
  
  render() {
    const data = this.props.data;
    return (
        <div className="container">
          <div className="row">
            <div className="col-2">
              <button type="button" className="get-data-btn btn btn-light" onClick={this.getData}>Get Data</button>
            </div>
            <div className="col-10 render-data">
              {data.main ? (
                  <div>
                    <InfoText infoTitle="Weather description: " infoText={data.weather[0].description}/>
                    <InfoText infoTitle="Temperature: " infoText={((data.main.temp - 32) / 1.8).toFixed(2)}/>
                    <InfoText infoTitle="Pressure: " infoText={(data.main.pressure / 1000).toFixed(3)}/>
                    <InfoText infoTitle="Humidity: " infoText={`${data.main.humidity} %`}/>
                  </div>) : <p className="container">Click on 'Get Data' button to get data.</p>}
            </div>
          </div>
        </div>
    );
  }
}

export default WidgetComponent;