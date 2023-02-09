import { Flex, Heading, IconButton } from '@chakra-ui/react';
import React from 'react';
import { FaHistory } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const HomeHeader = () => {
    return (
        <Flex justifyContent={'space-between'} px='20px' py='10px'>
            <Heading size={'md'}>WCS</Heading>
            <IconButton as={Link} to='/history' icon={<FaHistory />} />
        </Flex>
    );
};

export default HomeHeader;