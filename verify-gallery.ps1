$gdir = 'h:/GitHub/lekuresicastle/public/gallery'
$tmp = Get-ChildItem $gdir -Filter *.tmp
if ($tmp) { $tmp | Remove-Item -Force; Write-Host 'removed tmp files' } else { Write-Host 'no tmp files' }
$over = Get-ChildItem $gdir -Filter *.jpg | Where-Object { $_.Length -gt 25MB }
if ($over) { $over | ForEach-Object { Write-Host ('STILL OVER: ' + $_.Name) } } else { Write-Host 'all jpg under 25MB' }
Get-ChildItem $gdir -Filter *.jpg | Sort-Object Length -Descending | Select-Object -First 3 | ForEach-Object { Write-Host ($_.Name + ' ' + [math]::Round($_.Length/1MB,2) + 'MB') }
