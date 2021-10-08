param {
    $ConnectionString
}

az storage blob upload-batch `
--source '../_site' `
--destination '$web' `
--connection-string $ConnectionString