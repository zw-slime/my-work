import * as React from 'react';

require('./index.scss');

import { Animal } from '../home/Model/Animal';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

export class DetailBase extends React.Component<StateProps & DispatchProps & RouteComponentProps<{}>, {}> {
  componentDidMount() {
    const id = this.props.location.state.id;

  }

  render() {
    return (
        <div className='main'>
            <div className='info'>
              <p className='name'>博美犬</p>
            </div>
        </div>
    )
  }
}

interface StateProps {
  animalInfo: Animal
}

interface DispatchProps {
  start()
}

const mapStateToProps = (rawState, ownProps): StateProps => {
  return {
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch): DispatchProps => ({
  start: () => {

  }
})

export const Detail = connect<StateProps, DispatchProps, null>(
    mapStateToProps, mapDispatchToProps
)(DetailBase)
