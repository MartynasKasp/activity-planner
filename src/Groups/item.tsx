import { Tab, Tabs } from '@nextui-org/react';
import React from 'react';

function GroupItem() {
    return (
        <div className='GroupItem__Container'>
            <div className='GroupItem__Header'>
                <div className='mb-1 text-3xl font-bold'>Group</div>
                <span className='text-base text-slate-400'>Squadas žaidžia</span>
            </div>

            <div className='GroupItem__Content mt-5'>
                <Tabs
                    fullWidth
                    color='secondary'
                    variant='bordered'
                >
                    <Tab key='info' title='Info'>
                        <p>
                            Something goes here in the Info tab, like Group Title, and thats it? useless<br/>
                            Planning new activity control should probably be here as well
                        </p>
                    </Tab>
                    <Tab key='ownedGames' title='Owned Games'>
                        <p>
                            List of owned games with controls to edit/remove and add new games
                        </p>
                    </Tab>
                    <Tab key='members' title='Members'>
                        <p>
                            Group members with controls to remove and invite new members
                        </p>
                    </Tab>
                    {/* <Tab key='some' title='Some else'>
                        <p>
                            Group members with controls to remove and invite new members
                        </p>
                    </Tab>
                    <Tab key='more' title='Some more'>
                        <p>
                            Group members with controls to remove and invite new members
                        </p>
                    </Tab> */}
                </Tabs>
            </div>
        </div>
    )
}

export default GroupItem;
