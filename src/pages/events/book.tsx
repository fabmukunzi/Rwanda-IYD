import { Button, Card, Form, Input } from 'antd';

const BookEvent = () => {
  const onFinish = (values: any) => {
    console.log('Form values:', values);
  };

  const requiredMessage = 'This field is required';
  const minLengthMessage = 'Minimum 9 characters are required';

  return (
    <Card
      style={{ width: 600 }}
      className="my-20 text-primary px-10 mx-auto mt-24"
    >
      <p className="text-2xl font-bold font-sanz text-center py-3 mb-10">
        Register For the event!
      </p>
      <Form
        onFinish={onFinish}
        labelAlign="left"
        className="font-sanz"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
      >
        <Form.Item
          label={<span className="font-sanz">First Name</span>}
          name="firstName"
          rules={[{ required: true, message: requiredMessage }]}
        >
          <Input className="h-10 font-sanz" />
        </Form.Item>
        <Form.Item
          label={<span className="font-sanz">Last Name</span>}
          name="lastName"
          rules={[{ required: true, message: requiredMessage }]}
        >
          <Input className="h-10 font-sanz" />
        </Form.Item>
        <Form.Item
          label={<span className="font-sanz">Email</span>}
          name="email"
          rules={[
            { required: true, message: requiredMessage },
            { type: 'email', message: 'Invalid email format' },
          ]}
        >
          <Input className="h-10 font-sanz" />
        </Form.Item>
        <Form.Item
          label={<span className="font-sanz">Phone Number</span>}
          name="phoneNumber"
          rules={[{ required: true, message: requiredMessage }]}
        >
          <Input className="h-10 font-sanz" />
        </Form.Item>
        <Form.Item
          label={<span className="font-sanz">Address</span>}
          name="address"
          rules={[{ required: true, message: requiredMessage }]}
        >
          <Input className="h-10 font-sanz" />
        </Form.Item>
        <Form.Item
          label={<span className="font-sanz">NID / Passport</span>}
          name="nidPassport"
          rules={[
            { required: true, message: requiredMessage },
            { min: 9, message: minLengthMessage },
          ]}
        >
          <Input className="h-10 font-sanz" />
        </Form.Item>
        <div className="text-center">
          <Button
            htmlType="submit"
            className="h-10 w-60 font-bold font-sanz hover:!text-primary text-primary border-none bg-[#ffc107] text-xl"
          >
            Register
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default BookEvent;
