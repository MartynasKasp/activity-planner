import { Card, CardBody, Skeleton } from '@nextui-org/react';
import React from 'react';

function GroupListSkeleton() {
    return (
        <div>
            <Card className='mb-4'>
                <CardBody>
                    <Skeleton className='h-8 w-52 mb-6 rounded-lg' />
                    <Skeleton className='h-4 w-20 rounded-lg' />
                </CardBody>
            </Card>
            <Card className='mb-4'>
                <CardBody>
                    <Skeleton className='h-8 w-52 mb-6 rounded-lg' />
                    <Skeleton className='h-4 w-20 rounded-lg' />
                </CardBody>
            </Card>
            <Card className='mb-4'>
                <CardBody>
                    <Skeleton className='h-8 w-52 mb-6 rounded-lg' />
                    <Skeleton className='h-4 w-20 rounded-lg' />
                </CardBody>
            </Card>
        </div>
    );
}

export default GroupListSkeleton;
