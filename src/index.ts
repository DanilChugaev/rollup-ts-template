import Foo from './modules/Foo';

new Foo();

(async () => {
  const module = await import('./modules/Dog')
    .then(m => m.default);
  const dog = new module;

  dog.bark();
})();

console.log('test');