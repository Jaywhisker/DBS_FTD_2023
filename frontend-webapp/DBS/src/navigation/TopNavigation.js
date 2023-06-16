import React, {useState} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import '../components/styles/TopNavigationStyles.css';
import accountJson from '../testdata/account.json';

const Tab = createMaterialTopTabNavigator();

const Accounts = () => {
    const [showMore, setShowMore] = useState(false);
    const userAccounts = accountJson[0].account;
    const totalAmounts = userAccounts.map(account => account['total amount']);
    const totalAmountSum = userAccounts.reduce((sum, account) => sum + account['total amount'], 0).toFixed(2);

    return(
        <div className='container'>
            <div>
                <div className='header'>
                    <div className='blueline'>
                    </div>
                    <p className='text'>Your Net Worth</p>
                    <img src='/assets/expand.png' className='expand'/>
                </div>

                <div className='containertwo'>
                    <p className='value'>Value</p>
                    <div className='textcontainer'>
                        <p className='sgd'>SGD</p>
                        <p className='money'>{totalAmountSum}</p>
                    </div>
                </div>

                <div className='line'>
                </div>
            </div>

            <button onClick={() => setShowMore(!showMore)}>
                <div>
                    <div className='header'>
                        <div className='yellowline'>
                        </div>
                        <p className='text'>Deposits</p>
                        <img src='/assets/expand.png' className={showMore ? 'expandrotated' : 'expandrotated2'} />
                    </div>

                    <div className='containertwo'>
                        <p className='value'>Balance</p>
                        <p className='money'>{totalAmountSum}</p>
                    </div>

                    <div className='line'>
                    </div>
                </div>
            </button>
        </div>
    );
};

const Insights = () => (
        <div className='insightscontainer'>
            <div className='rectangle'>
                <p className='date'>14 JUN</p>
                <p className='title'>Review your budget</p>
                <p className='body'>You've maintained your monthly spending average.</p>
            </div>

            <div className='rectangle'>
                <p className='date'>14 JUN</p>
                <p className='title'>Resolve unexpected transactions quickly!</p>
                <p className='body'>Here are some tips for you.</p>
            </div>

            <div className='rectangle'>
                <p className='date'>14 JUN</p>
                <p className='title'>Was this deposit expected?</p>
                <p className='body'>You don't often receive money from this source.</p>
            </div>
        </div>
        );

const TopNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#444444",
        tabBarInactiveTintColor: "#A3A3A3",
        tabBarLabelStyle: {
            fontSize: 16,
            fontFamily: 'Lato-Regular',
            fontWeight: 'bold',
        },
        tabBarIndicatorStyle: {backgroundColor:'#EBAA4E'},
        })}>      
        <Tab.Screen name="ACCOUNTS" component={Accounts} />
        <Tab.Screen name="INSIGHTS" component={Insights} />
    </Tab.Navigator>
  );
};

export default TopNavigator;
