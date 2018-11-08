import * as React from "react";

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
  
  async componentDidMount() {
    // this.setState({data: json});
  }
  
  render() {
    return (
        <div>
          <button onClick={this.getData}>Get Data</button>
          {JSON.stringify(this.props.data)}
        </div>
    );
  }
}

export default WidgetComponent;