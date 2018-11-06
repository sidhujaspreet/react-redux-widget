import * as React from "react";

class Widget extends React.Component<any, any> {
  
  constructor(props: any) {
    super(props);
    this.state = {
      data: null
    };
  }
  
  // async componentDidMount() {
  //   let city = 'chicago';
  //   const response = await fetch(`http://api.openweathermap.org/data/2.5 /weather?q=${city}&appid=99ac3d884763185b90a9cb9e8fd095dd`);
  //   const json = await response.json();
  //   console.log(json);
  //   this.setState({data: json});
  // }
  
  render() {
    return (
        <div>
          {JSON.stringify(this.props.city)}
        </div>
    );
  }
}

export default Widget;