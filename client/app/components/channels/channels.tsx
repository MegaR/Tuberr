import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { Channel } from '../../../../shared/models';
import { ChannelListItem } from './channel-list-item/channel-list-item';

const s = require('./channels.scss');

interface ChannelsState {
    channels: Channel[]
}

export class Channels extends React.Component<{}, ChannelsState> {

    constructor(props) {
        super(props);
        
        this.state = {
            channels: null
        };

        setTimeout(() => {
            const item: Channel = {name: 'testname'};

            this.setState({
                channels: [
                    item, item, item, item, item, item
                ]
            });
        }, 1000);
    }

    render() {
        return <div id="channels"> 
            <Button>Add channel</Button>
            {this.channelsList()}
        </div>;
    }

    channelsList() {
        if(!this.state.channels) {
            return <div>Loading</div>;
        }

        return this.state.channels.map((item, index) => {
            return <ListGroup><ChannelListItem channel={item} key={index}/></ListGroup>
        });
    }
}
