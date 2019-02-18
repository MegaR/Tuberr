import React from 'react';
import { Channel } from '../../../../../shared/models';
import { ListGroup } from 'react-bootstrap';

interface ChannelListItemProps {
    channel: Channel
}

export class ChannelListItem extends React.Component<ChannelListItemProps> {
    render() {
        const channel = this.props.channel;
        return <ListGroup.Item>
            {channel.name}
        </ListGroup.Item>;
    }
}
