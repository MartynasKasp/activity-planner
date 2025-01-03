import { Card, CardBody, CardHeader, Skeleton } from '@nextui-org/react';
import React from 'react';

function GroupInfoSkeleton() {
    return (
        <div>
            <Card className='mt-5'>
                <CardHeader>
                    <Skeleton className='h-6 w-24 rounded-lg' />
                </CardHeader>
                <CardBody>
                    <Skeleton className='h-10 w-full mb-4 rounded-lg' />
                    <Skeleton className='h-8 w-20 rounded-lg' />
                </CardBody>
            </Card>
        </div>
    );
}

export default GroupInfoSkeleton;
