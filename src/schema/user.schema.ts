import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    trim: true,
    unique: '用户名称不能重复',
    required: '用户名称不能为空',
  },
  account: {
    type: String,
    default: '',
    trim: true,
    unique: '账号不能重复',
    required: '账号不能为空',
  },
  passWord: {
    type: String,
    default: '',
    trim: true,
    required: '密码不能为空',
  },
  age: Number,
  mobilePhone: String,
  homeAddress: String,
});
