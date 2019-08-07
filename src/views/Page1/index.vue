<template>
    <div>1111111111
        <Table border :columns="columns5" :data="data5" ></Table>
    </div>
</template>
<script>
    export default {
        props: {
        },
        created() {
        },
        data () {
            return {
                columns5: [
                    {
                        title: '日期',
                        key: 'date',
                        sortable: true
                    },
                    {
                        title: '姓名',
                        key: 'name',
                        render: (h, param) => {
                            let vm = this;
                            return h(
                            "div",
                            {
                                props: {}
                            },
                            [
                                h("Input", {
                                    props: {
                                        type: "text",
                                        value: param.row.name
                                    },
                                    
                                    on: {
                                        "on-blur": event => {
                                            if(event.target.value == ""){
                                                this.data5[param.index].valid = "不能为空";
                                            }else{
                                                params.row.name = event.target.value;
                                                this.data5[param.index].name = event.target.value;
                                                this.$set(param.row, '$isEdit', false);
                                            }
                                        
                                        },
                                    
                                    }
                                }),
                                h(
                                    "span",
                                    {
                                        attrs: {
                                        title: param.row.valid
                                        },
                                        style: {
                                        color: "red"
                                        }
                                    },
                                    param.row.valid
                                )
                            ]
                            );
                        },
                        render: (h, params) => { 
                            if (params.row.$isEdit) {
                              return h('Input', {
                                props: {
                                    type: "text",
                                    value: params.row.name
                                },
                                
                                on: {
                                  "on-blur": event => {
                                      debugger
                                        if(event.target.value == ""){
                                            this.data5[param.index].valid = "不能为空";
                                        }else{
                                            params.row.name = event.target.value;
                                            this.data5[params.index].name = event.target.value;
                                            this.$set(params.row, '$isEdit', false);
                                        }
                                      
                                  },
                                  
                                }
                              });
                            } else  {  
                              return h('div', {
                                on: {
                                    click: () => {
                                        this.$set(params.row, '$isEdit', true);
                                    },                            
                                }
                              },params.row.name);
                            }
                        }
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        sortable: true
                    },
                    {
                        title: '地址',
                        key: 'address'
                    },
                ],
                data5: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                        date: '2016-10-03',
                        valid:""
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗',
                        date: '2016-10-01',
                        valid:""
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道',
                        date: '2016-10-02',
                        valid:""
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道',
                        date: '2016-10-04',
                        valid:""
                    }
                ]
            }
        },
        methods: {
            handleEdit (row) {
               this.$set(row, '$isEdit', true)
              
            }, 
            handleSave (row) {
              this.$set(row, '$isEdit', false)
            }
        }
    }
</script>