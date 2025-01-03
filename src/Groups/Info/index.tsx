import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react';
import React, { useState } from 'react'

function GroupInfo() {
    const [groupName, setGroupName] = useState('Squadas žaidžia');
    // let groupName = 'Squadas žaidžia';
    // const setGroupName = (text: string) => groupName = text; 

    return (
        <div className='GroupInfo__Container mt-5'>
            <Card>
                <CardHeader>
                    Settings
                </CardHeader>
                <CardBody>
                    <Input
                        label='Group name'
                        placeholder='Enter group name'
                        value={groupName}
                        onValueChange={setGroupName}
                        // errorMessage='Please provide a Group Name'
                        // isInvalid
                    />

                    <div className='mt-4'>
                        <Button color='secondary'>
                            Save
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default GroupInfo;
