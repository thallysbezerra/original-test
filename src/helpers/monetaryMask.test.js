import monetaryMask from './monetaryMask';
import { expect } from 'chai';

it('() => monetaryMask() should be a function ', () => {
	expect(() => monetaryMask()).to.be.a('function');
});

it('monetaryMask(4.21) should return "R$ 4,21"', () => {
	expect(monetaryMask(4.21)).to.be.equal('R$ 4,21');
});

it('monetaryMask(8) should return "R$ 8,00"', () => {
	expect(monetaryMask(8)).to.be.equal('R$ 8,00');
});

it('monetaryMask(45.3) should return "R$ 45,30"', () => {
	expect(monetaryMask(45.3)).to.be.equal('R$ 45,30');
});

it('monetaryMask(390) should return "R$ 390"', () => {
	expect(monetaryMask(390)).to.be.equal('R$ 390,00');
});

it('monetaryMask(391.85) should return "R$ 391,85"', () => {
	expect(monetaryMask(391.85)).to.be.equal('R$ 391,85');
});

it('monetaryMask(1250) should return "R$ 1250"', () => {
	expect(monetaryMask(1250)).to.be.equal('R$ 1250,00');
});

it('monetaryMask(63000.56) should return "R$ 63000,56"', () => {
	expect(monetaryMask(63000.56)).to.be.equal('R$ 63000,56');
});
