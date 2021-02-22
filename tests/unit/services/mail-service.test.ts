import chai from 'chai';

import {
    DependencyInjection,
    MailService,
    Config,
} from '../../../src';

const expect = chai.expect;

describe('MailService - Class', () => {
    let response: string | null;
    const di = new DependencyInjection({});
    const definitions = new Config().getDefinitions();
    const mail = di.get(definitions.MAIL);
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
            expect(JSON.stringify(di.get(definitions.MAIL).sendMail)).to.eql(JSON.stringify(mailService.sendMail));
        });

        it('should send mail', function () {
            expect(response).to.eql('Mail Sent!');
        });
    })
})
