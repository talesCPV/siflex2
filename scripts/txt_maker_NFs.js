let nfs_rules = {}
getFile('/../config/NFs_rules.json').then((json)=>{
    nfs_rules = JSON.parse(json)
})