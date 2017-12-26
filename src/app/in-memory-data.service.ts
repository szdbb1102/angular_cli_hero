import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }
}

// http:
// 1. Enable HTTP services
// 步骤：open the root AppModule,
// import the HttpClientModule symbol from @angular/common/http,
// add it to the @NgModule.imports array.
// 2. npm install angular-in-memory-web-api --save
// 3. 在app.module  import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// 4. 创建in-memory-data.service
// 5. InMemoryDbService使用
// 6. HttpClientInMemoryWebApiModule在app.module forRoot
