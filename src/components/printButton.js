// JavaScript Document
import React from 'react';
import imgUrl from '../images/printMe.png';

class PrintButton extends React.Component {
  print(event) {
    window.onclick = event => {
      window.print();
    };
  }

  render() {
    return (
      <div>
        <img
          style={styles.Btn}
          src={imgUrl}
          alt={'test'}
          onClick={this.print}
        />
      </div>
    );
  }
}

export default PrintButton;

const styles = {
  Btn: {
    width: '85%',
    margin: '14%'
  }
};
