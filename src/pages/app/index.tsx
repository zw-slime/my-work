import * as React from 'react';

require('./index.scss');

import { Carousel, Input } from 'antd';
import {Route, Link, } from 'react-router-dom';
import { Home } from '../home';
import { Detail } from '../detail';

const Search = Input.Search;

export class App extends React.Component {

  render() {
    return (
          <div className='container'>
            <div className='header'>
              <label className='log'>爱悦之城</label>
            </div>
            <div className='banner'>
              <Carousel autoplay>
                <div><img src={require('./img/banner-dog.jpg')}/></div>
                <div><img src={require('./img/banner-3.png')}/></div>
                <div><img src={require('./img/banner-2.png')}/></div>
                {/*<div><img src={require('./img/banner-dog.jpg')}/></div>*/}
              </Carousel>

              <div className='search-box'>
                <Search
                    placeholder='寻找您心中最中意的萌宠'
                    enterButton
                    size='large'
                />
              </div>
            </div>

            <div className='content'>
                <Route path={'/'} exact  component={Home} />
                <Route path={'/detail'} component={Detail}  />
            </div>
          </div>
    );
  }
}
