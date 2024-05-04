const mongoose = require('mongoose');

describe('mongoose', () => {
  let conn;

  beforeAll(async () => {
    conn = await mongoose.createConnection('mongodb://127.0.0.1:27017,127.0.0.1:27018/mongoose_test2').asPromise();
  });

  afterAll(async () => {
    await conn.close();
  });

  it('create a doc', async () => {
    const TestModel = conn.model('Test', mongoose.Schema({ name: String }));
    await TestModel.create({ name: 'taco' });
    const doc = await TestModel.findOne({ name: 'taco' }).orFail();
    expect(doc.name).toBe('taco');
  });
});
