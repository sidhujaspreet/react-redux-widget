import * as React from "react";
import './WidgetComponent.scss';

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
    return (
        <div className="container">
          <div className="row">
            <div className="col-2">
              <button type="button" className="get-data-btn btn btn-light" onClick={this.getData}>Get Data</button>
            </div>
            <div className="col-10 render-data">
              {JSON.stringify(this.props.data)}
            </div>
          </div>
        </div>
    );
  }
}

export default WidgetComponent;