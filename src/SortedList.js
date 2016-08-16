import React, {Component} from 'react';

class SortedList extends Component {
    constructor() {
        super();
        this.renderChild = this.renderChild.bind(this);
    }

    renderChild(el) {
        return React.Children.map(this.props.children, child=> React.cloneElement(child, {...el}));
    }

    render() {
        return (
            <div>
                {this.props.sort(this.props.data)
                    .map((el, index)=> <div key={index}>{this.renderChild(el)}</div>)}
            </div>
        );
    }
}

export default SortedList;