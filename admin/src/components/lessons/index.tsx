/*!
 * Vendor
 */

import * as React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Table, Button } from 'antd';

/*!
 * Actions
 */

import { deleteLesson } from '../../actions/lessonsActions';

/*!
 * Columns
 */

const columns = [
  {
    title: 'Тема',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: 'Создан',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text, record) => moment(text).locale('ru').format('L'),
  }, {
    title: 'Действия',
    key: 'action',
    render: (text, record) => (
      <div>
        <Link to={`/lessons/edit/${record._id}`}>
          <Button type="primary" icon="edit" style={{ marginLeft: 10 }} />
        </Link>

        <Button type="primary" icon="delete" style={{ marginLeft: 10 }} onClick={() => deleteLesson(record._id)} />
      </div>
    ),
  },
];

/*!
 * Expo
 */

const LessonsIndex = ({ loading, data }) => (
  <div>
    <Table 
      columns={columns}
      rowKey={(record: any) => record._id}
      dataSource={data}
      loading={loading}
    />
    <div style={{ float: 'right', margin: '10px 0 5px 0' }}>
      <Link to="/lesson/create">
        <Button type="primary" style={{ marginLeft: 10 }}>Добавить урок</Button>
      </Link>
    </div>
  </div>
);

const mapStateToProps = ({ lessons: { loading, data } }) => ({ loading, data });

export default connect(
  mapStateToProps,
)(LessonsIndex as any);
