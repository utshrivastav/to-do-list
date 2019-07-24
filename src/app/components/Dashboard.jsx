import React from 'react';
import { connect } from 'react-redux';
import { ConnectedTaskList } from './TaskList';
const mapStateToProps = (state) => ({
    groups: state.groups
})

export const Dashboard = ({groups}) => (
    <div>
        <h2>Dashboard</h2>
        {groups.map((group) => (
            <ConnectedTaskList id={group.id} name={group.name} />
        ))}
    </div>
)

export const ConnectedDashboard = connect(mapStateToProps) (Dashboard);