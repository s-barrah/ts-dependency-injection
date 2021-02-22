import chai from 'chai';

import {
    DependencyInjection,
} from '../../../src';

import DatabaseServiceMock from "../../mocks/services/database-service.mock";

const expect = chai.expect;

describe('DatabaseServiceMock - Class', () => {
    let response: string | null;
    const configuration = {
        DEPENDENCIES: {
            DB: DatabaseServiceMock,
        }
    }
    const di = new DependencyInjection(configuration);
    const db = di.get('DB');
    const dbService = new DatabaseServiceMock(di);

    before((done) => {
        db
            .connect()
            .then((res: string) => {
                response = res;
                done();
            })
            .catch(() => {
                response = null;
                done()
            })
    })

    describe('should instantiate DatabaseServiceMock', () => {

        it('should output the methods', () => {
            expect(JSON.stringify(di.get('DB').connect)).to.eql(JSON.stringify(dbService.connect));
        });

        it('should connect to database', function () {
            expect(response).to.eql('Connected');
        });
    })
})
