import { Card, CardBody, CardHeader, Skeleton } from '@nextui-org/react';
import React from 'react';

function GroupMembersSkeleton() {
    return (
        <div>
            <Card className='mt-5'>
                <CardHeader>
                    <Skeleton className='h-6 w-24 mb-4 rounded-lg' />
                </CardHeader>
                <CardBody>
                    <div className="max-w-[300px] w-full flex items-center gap-3 mb-2">
                        <div>
                            <Skeleton className="flex rounded-full w-10 h-10" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <Skeleton className="h-3 w-2/5 rounded-lg" />
                            <Skeleton className="h-3 w-3/5 rounded-lg" />
                        </div>
                    </div>

                    <div className="max-w-[300px] w-full flex items-center gap-3 mb-2">
                        <div>
                            <Skeleton className="flex rounded-full w-10 h-10" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <Skeleton className="h-3 w-2/5 rounded-lg" />
                            <Skeleton className="h-3 w-3/5 rounded-lg" />
                        </div>
                    </div>

                    <div className="max-w-[300px] w-full flex items-center gap-3 mb-2">
                        <div>
                            <Skeleton className="flex rounded-full w-10 h-10" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <Skeleton className="h-3 w-2/5 rounded-lg" />
                            <Skeleton className="h-3 w-3/5 rounded-lg" />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

export default GroupMembersSkeleton;
