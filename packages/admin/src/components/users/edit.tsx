/*!
 * Vendor
 */

import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Select } from 'antd';

/*!
 * Actions
 */

import { success } from './../../utils/modals';
import { updateUser } from '../../actions/usersActions';
import { fetchCourses } from '../../actions/coursesActions';

/*!
 * Components
 */

const Option = Select.Option;
const FormItem = Form.Item;

/*!
 * InitialState
 */

const initialState = {
  fio: '',
  telephone: '',
  password: '',
  organization: 0,
  courses: [],
  finishedCourses: [],
  payments: [],
  tests: [],
  email: '',
  position: '',
  level: 0,
};

/*!
 * Expo
 */

class UserEditForm extends React.Component<any, IUser> {
  state = initialState;

  public componentDidMount() {
    const { users, match: { params } } = this.props;

    const filteredUser = users.data.filter(({ _id }) => _id === params.id);
    this.props.fetchCourses();

    return this.setState({ ...filteredUser[0] });
  }

  private handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        const data = { ...this.state, ...values };
        delete data.organization;
        delete data.payments;
        
        this.props.updateUser(data).then(() => success());
      }
    });
  }

  public render() {
    const { form: { getFieldDecorator } } = this.props;
    const {
      fio,
      organization,
      courses,
      email,
    } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('fio', {
            rules: [{ required: true, message: 'Укажите ФИО!' }],
            initialValue: fio,
          })(<Input placeholder="Иванов Иван Иванович" />)}
        </FormItem>

        <FormItem>
          {getFieldDecorator('email', {
            rules: [{
              required: true,
              pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
              message: 'Укажите валидный email!'
            }],
            initialValue: email,
          })(<Input placeholder="example@mail.ru" />)}
        </FormItem>

        <FormItem>
          {getFieldDecorator('organization', {
            initialValue: organization,
          })(
            <Select placeholder="организация">
              <Option key="0" value={0}>Частное лицо</Option>
              {this.props.organizations.data.map(({ _id, name }) => <Option key={_id} value={_id}>{name}</Option>)}
            </Select>,
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('courses', {
            initialValue: courses,
          })(
            <Select mode="multiple" placeholder="выберите курс">
              {this.props.courses.data.map(({ _id, name }) => <Option key={_id} value={_id}>{name}</Option>)}
            </Select>,
          )}
        </FormItem>

        <FormItem>
          <hr style={{ border: 'none', borderBottom: '1px solid #eeeeee' }} />
          <Button type="primary" htmlType="submit" style={{ float: 'right' }}>сохранить</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedUserEditForm = Form.create()(UserEditForm as any);

const mapStateToProps = ({ users, organizations, courses }) => ({ users, organizations, courses });

export default connect(
  mapStateToProps,
  { fetchCourses, updateUser },
)(WrappedUserEditForm as any);
