import chai from 'chai';

import {
    DependencyInjection,
    MailService,
    CONFIGURATION,
    DEFINITIONS,
} from '../../../src';

const expect = chai.expect;

describe('MailService - Class', () => {
    let response: string | null;
    const di = new DependencyInjection({});
    const mail = di.get(DEFINITIONS.MAIL);
    const mailService = new MailService(di);

    before((done) => {
        mail
            .sendMail()
            .then((res: string) => {
                response = res;
                done();
            })
            .catch(() => {
                response = null;
                done()
            })
    })

    describe('should instantiate MailService', () => {

        it('should output the methods', () => {
            expect(JSON.stringify(di.get(DEFINITIONS.MAIL).sendMail)).to.eql(JSON.stringify(mailService.sendMail));
        });

        it('should send mail', function () {
            expect(response).to.eql('Mail Sent!');
        });
    })
})
