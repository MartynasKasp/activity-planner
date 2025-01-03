import { Add, PersonAdd, PersonRemove } from '@mui/icons-material';
import { Button, Card, CardBody, CardHeader, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure, User } from '@nextui-org/react';
import React from 'react';

function GroupMembers() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const members = [
        {
            id: '1',
            initials: 'MK',
            name: 'Morty Kay',
            email: 'morty@kay.co'
        },
        {
            id: '2',
            initials: 'JD',
            name: 'John Doe',
            email: 'johndoe@em'
        },
        {
            id: '3',
            initials: 'JD',
            name: 'Jane Doe',
            email: 'jane.doe@doe.co.us'
        },
        {
            id: '4',
            initials: 'RD',
            name: 'Robert Doe',
            email: 'drobert87@giml.cm'
        },
    ];

    return (
        <div className='GroupMembers__Container mt-4'>
            <Card>
                <CardHeader className='justify-between'>
                    Members

                    <div className='flex justify-end'>
                        <Button color='success' variant='light' startContent={<PersonAdd />}>
                            Invite
                        </Button>
                    </div>
                </CardHeader>
                <CardBody>
                    <div>
                        {members.map((member) => (
                            <div className='mb-2 flex justify-between'>
                                <User
                                    key={member.id}
                                    avatarProps={{
                                        name: member.initials
                                    }}
                                    name={member.name}
                                    description={member.email}
                                />

                                <Button isIconOnly color='danger' variant='light' size='sm' onPress={onOpen}>
                                    <PersonRemove />
                                </Button>
                                {/* Multiple modals does not work correctly */}
                                <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop='blur'>
                                    <ModalContent>
                                        {(onClose) => (
                                            <>
                                                <ModalHeader>
                                                    Remove member
                                                </ModalHeader>
                                                <ModalBody>
                                                    <p>
                                                        Are you sure you want to remove member 
                                                        <strong> {member.name}</strong> from this group?
                                                    </p>
                                                </ModalBody>
                                                <ModalFooter>
                                                    <Button color='primary' variant='light' onPress={onClose}>
                                                        Cancel
                                                    </Button>
                                                    <Button color='danger' onPress={onClose}>
                                                        Remove
                                                    </Button>
                                                </ModalFooter>
                                            </>
                                        )}
                                    </ModalContent>
                                </Modal>
                        </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default GroupMembers;
