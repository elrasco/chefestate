import React, { Component } from 'react';
import { DatePicker, Row, Col, TimePicker, Modal, Spin, Icon } from 'antd';

import { isFunction } from 'lodash';
import moment from 'moment';

import './DateTimePicker.css';
import { inject, observer } from 'mobx-react';

@observer
@inject('commonStore', 'translationsStore')
export default class DateTimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  onOk = () => {
    const { translationsStore } = this.props;
    if (this.state.dateTime && this.state.time && this.state.date) {
      if (isFunction(this.props.onOk)) {
        this.props.onOk(this.state.dateTime.toDate());
      }
    } else {
      Modal.warning({ title: translationsStore.translate('common.modal.warning'), content: translationsStore.translate('components.datePicker.errors.noDateTime') });
    }
  };

  onCancel = () => {
    this.close();
    if (isFunction(this.props.onCancel)) {
      this.props.onCancel();
    }
  };

  setDatetime = dateTime => {
    if (dateTime) {
      this.setState({ dateTime: moment(dateTime), time: moment(dateTime), date: moment(dateTime) });
    } else {
      this.setState({ dateTime: undefined, time: undefined });
    }
  };

  setLoading = (loading = true) => {
    this.setState({ loading });
  };

  open = () => {
    this.setState({ visible: true });
  };

  close = () => {
    this.setState({ loading: false, dateTime: undefined, date: undefined, time: undefined, visible: false });
  };

  onDateChange = value => {
    if (!this.state.dateTime) {
      this.setState({ dateTime: moment() });
    }

    const dateTime = moment(this.state.dateTime);
    dateTime.set('year', value.get('year'));
    dateTime.set('month', value.get('month'));
    dateTime.set('date', value.get('date'));

    this.setState({ dateTime, date: dateTime });
  };

  onTimeChange = value => {
    this.setState({ time: value });
    if (!this.state.dateTime) {
      this.setState({ dateTime: moment() });
    }

    const dateTime = moment(this.state.dateTime);
    dateTime.set('hour', value.get('hour'));
    dateTime.set('minute', value.get('minute'));
    dateTime.set('second', 0);

    this.setState({ dateTime, time: dateTime });
  };

  render() {
    const { commonStore } = this.props;
    return (
      <Modal
        title={this.props.title}
        id="DateTimePicker"
        onCancel={this.onCancel}
        onOk={this.onOk}
        visible={this.state.visible}
        bodyStyle={{ height: '335px' }}
        width="476px"
        closable={false}
        destroyOnClose={true}
        wrapClassName="DateTimePickerModal"
      >
        {this.state.visible && (
          <Spin spinning={this.state.loading} indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />}>
            <Row className="DateTimePicker" type="flex">
              <Col id="DatePickerContainer" style={{ width: '300px' }}>
                <DatePicker
                  getCalendarContainer={() => document.getElementById('DatePickerContainer')}
                  dropdownClassName="DateTimePickerDropdown"
                  showToday={false}
                  open={this.state.visible}
                  format={commonStore.longDateFormat.L}
                  value={this.state.date}
                  onChange={this.onDateChange}
                  disabledDate={currentDate => moment(currentDate).isBefore(moment(new Date()).subtract(1, 'day'))}
                />
              </Col>
              <Col id="TimePickerContainer">
                <TimePicker
                  inputReadOnly
                  getPopupContainer={() => document.getElementById('TimePickerContainer')}
                  format={commonStore.longDateFormat.LT}
                  open={this.state.visible}
                  minuteStep={15}
                  hideDisabledOptions={true}
                  disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 7, 21, 22, 23]}
                  value={this.state.time}
                  onChange={this.onTimeChange}
                />
              </Col>
            </Row>
          </Spin>
        )}
      </Modal>
    );
  }
}
