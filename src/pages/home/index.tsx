import * as React from 'react';

require('./index.scss');

import { Card } from 'antd';

const { Meta } = Card;

import { animalList } from '../datas/animalList';
import { AnimalList } from './Model/Animal';
import { getState, ActTypes } from './actions';
import { connect } from 'react-redux';
import { RouteComponentProps, RouterProps } from 'react-router';

export class HomeBase extends React.Component<StateProps & DispatchProps & RouteComponentProps<{}>, {}> {

  componentDidMount() {
    this.props.start()
  }

  redirectDetail(id) {
    this.props.history.push({ pathname: '/detail', state: { id }} );
  }

  render() {
    return (
        <div className='main'>
          {
            this.props.animalList.map((list, key) =>
                <div className='item' key={key}>
                  <div className='title'>
                    <label>{list.title}</label>
                  </div>
                  <div className='list'>
                    <ul>
                      {
                        list.content.map((animal, index) => {
                              return (
                                  <li key={index}>
                                    <a onClick={() => this.redirectDetail(animal.id)}>
                                      <Card cover={<img alt='example' src={animal.img}/>}>
                                        <Meta title={animal.title}/>
                                      </Card>
                                      {animal.tag !== '' &&
                                      <div className='tag'>
                                        <label>{animal.tag}</label>
                                      </div>}
                                    </a>
                                  </li>
                              )
                            }
                        )}
                    </ul>
                  </div>
                </div>
            )}
        </div>
    );
  }
}

interface StateProps {
  animalList: AnimalList
}

interface DispatchProps {
  start()
}

const mapStateToProps = (rawState, ownProps): StateProps => {
  const state = getState(rawState)
  return {
    animalList: state.animalList,
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch): DispatchProps => ({
  start: () => {
    dispatch({
      type: ActTypes.SetAnimalList,
      payload: animalList
    })
  }
})

export const Home = connect<StateProps, DispatchProps, null>(mapStateToProps, mapDispatchToProps)(HomeBase)
