import { Add } from '@mui/icons-material';
import { Button, Card, CardBody, CardFooter, CardHeader, Skeleton } from '@nextui-org/react';
import React from 'react'
import GroupListSkeleton from './skeleton/list';

function GroupsList() {
    const list = [
        {
            id: '1',
            title: 'Squadas žaidžia',
            membersCount: 6,
        },
        {
            id: '2',
            title: 'Let\'s play',
            membersCount: 2
        },
        {
            id: '3',
            title: 'Playful evenings',
            membersCount: 5
        }
    ];

    return (
        <div className='GroupsList__Container'>
            <div className='GroupsList__Header'>
                <h1>My Groups</h1>
            </div>

            <div className='GroupsList__ButtonRow mb-6 flex justify-end'>
                <Button startContent={<Add />} color='secondary' variant='shadow'>
                    Create group
                </Button>
            </div>

            <div className='GroupsList__Content'>
                {/* <GroupListSkeleton /> */}

                {list.map((item) => (
                    <Card
                        key={item.id}
                        isPressable
                        fullWidth
                        shadow='lg'
                        onPress={() => openGroup(item.id)}
                        className='mb-4'
                    >
                        <CardBody>
                            <Skeleton className='rounded-lg' isLoaded={true}>
                                <div className='font-bold text-large'>{ item.title }</div>
                            </Skeleton>
                        </CardBody>
                        <CardFooter className="gap-3">
                            <div className="flex gap-1">
                                <p className="font-semibold text-default-400 text-small">{ item.membersCount }</p>
                                <p className=" text-default-400 text-small">Members</p>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}


function openGroup(id: string) {
    console.log('open group page', id);
}

export default GroupsList;