(function() {
    'use strict';

    angular.module('ricoAPP')
        .controller('formCtrl', function($scope, $state, AvailableInvestments) {
            var vm = this;


            vm.step = $state.current.data.step;
            vm.objectiveSelect = function(objective) {
                result.objective = objective;
                $state.go('step2');
            };
            vm.value = function(v) {
                result.value = v;
                $state.go('step3');

            };
            vm.duration = function(v) {
                result.duration = v;
                $state.go('step4');
            };


            if ($state.current.data.step === 4) {
                AvailableInvestments.getAvailableInvestments()
                    .then(function(response) {
                        var json = response.data;

                        var ret = json
                            .filter(function(arr) {
                                return arr.minimumBuyValue <= result.value;
                            })
                            .filter(function(arr) {
                                var term = getTerm(result.duration);

                                return arr.term.indexOf(term) !== -1;
                            });

                        if (ret.length > 1) {
                            ret = ret.sort(function(a,b) { return parseInt(a.priority) - parseInt(b.priority) } );
                        }
                        if (ret.length == 0){
                            vm.alert = "Nenhum investimento disponível nesse perfil!"
                        }

                        vm.result = ret[ret.length - 1];
                    })
                    .catch(function(err) {
                        console.log(err);
                    });

            }

            function getTerm(v) {
                var ret = '';

                if (v <= 2) {
                    ret = 'short';
                }
                else if(v > 2 && v <=5) {
                    ret = 'medium';
                } else {
                    ret = 'long'
                }

                return ret;
            }
            console.log(result);

            return vm;

        });
}());
