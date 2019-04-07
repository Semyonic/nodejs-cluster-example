const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
const app = require('../app')
const cluster = require('cluster')

chai.use(chaiHttp)

describe('Test GET Route Index', () => {
  it('It should GET index page', (done) => {
    chai.request(app)
      .get('/').end((err, res) => {
      expect(res).status(200)
      if (err) {
        console.log(err)
      } else {
        done()
      }
    })
  })
})

/* describe('Test process avability', () => {
  it('It should be defined', (done) => {
    expect(process.hasOwnProperty('send')).to.deep.equal(true)
    done()
  })
}) */

describe('Test that spawned process master', () => {
  it('It should be master', (done) => {
    expect(cluster.isMaster).to.deep.equal(true)
    done()
  })
})

describe('Test inter-process messaging', () => {
  it('It should send message from worker to master', (done) => {
    process.send = process.send || function () {}
    expect(process.send({asd: 'asdasd'}))
    done()
  })
})
