(function(){
  'use strict';

  angular.module('testAngularCmelion')
      .factory('MyTestRepository', factoryFunction);

    function factoryFunction ($injector, MyTestModel) {
      var BaseRepository = $injector.get('BaseRepository');
      return new BaseRepository({name: 'MyTestRepository', model: MyTestModel});
    }

}());
