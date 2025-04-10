import { IExperience } from '@/app/utils';
import { Flex } from '@/styled-system/jsx';
import { FC } from 'react';
import { css } from 'styled-system/css';
import { Text } from '../ui';

export interface ExperienceCardProps extends IExperience {}

export const ExperienceCard: FC<ExperienceCardProps> = ({ role, time, organization }) => {
    return (
        <Flex className={experienceCardStyles}>
            <Text as={'h1'} textStyle={'sub-title'} fontWeight={'semibold'}>
                {role}
            </Text>
            <Text as={'h3'}>{organization}</Text>
            <Text as={'p'} mt={'4'}>
                {time}
            </Text>
        </Flex>
    );
};

const experienceCardStyles = css({
    flexDirection: 'column',
    flex: 1,
    minW: 'xs',
    maxW: 'xs',
    p: '4',
    borderStyle: 'solid',
    borderColor: 'grey',
    borderWidth: 'thin',
    borderRadius: 'xl'
});
