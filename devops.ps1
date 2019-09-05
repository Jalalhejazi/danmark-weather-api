
param(
     $organization  = "https://dev.azure.com/superusers-kursus"
    ,$project       = "nodejs"
    ,$repoName      = "danmark-weather-api"
)

$git           = "tfsgit"
$pipelinesName = "$repoName.CI"
$pipelinesYaml = "/azure-pipelines.yml"

# az extension add --name azure-devops

$env:AZURE_DEVOPS_EXT_PAT = get-azure-secret devops
az devops login --organization $organization
az devops configure --defaults organization=https://dev.azure.com/superusers-kursus project=nodejs



az pipelines create --project=$project --name $pipelinesName --yml-path $pipelinesYaml --description $repoName --repository $repoName --branch master --repository-type $git 
# Successfully created a pipeline with Name: danmark-weather-api.CI, Id: 41.

#$id = 41
#az pipelines delete --id $id

## az pipelines build list --top 1 -o table 
## az pipelines build list --definition-ids "40"  -o table --query "{build: [0].buildNumber, status: [0].status}"

