yourfilenames=`ls $1`
for eachfile in $yourfilenames
do
   svgr --icon --replace-attr-values \"#063855=currentColor\" -d $2  --icon --ref --title-prop $1$eachfile
done