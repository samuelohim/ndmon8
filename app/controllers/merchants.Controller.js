const mM = require('../models/merchantModel');

module.exports = {

		ls: (req, res) =>{
			res.send('ln 8');
		},

		listMerchants: (req, res)=>{
			mM.find({}, (err, shangjia)=>{
				if(err){
					res.status(404);
					res.send('Merchant not found');
				}
				else
				{
					// res.json(shangjia);
					res.render('pages/listMerchants', {shangjia, shangjia});
					// res.render('pages/listMerchants', {shangjia, shangjia});
				}

			});
		},

		seedMerchants: (req, res)=>{
			const shangjia = [	{merchantName: 'Dr Reborn', mid: '78129392', createDate: '', accountBalance: '812934891234', tn: '2', numberofTransaction: '12', balanceAfterSettlement: '87123712'},
				{merchantName: 'Benevolence', mid: '19823812', createDate: '', accountBalance: '812934891234', tn: '1', numberofTransaction: '23', balanceAfterSettlement: '87123712'},
				{merchantName: 'E Corporation', mid: '82913135', createDate: '', accountBalance: '812934891234', tn: '3', numberofTransaction: '13', balanceAfterSettlement: '87123712'},
				{merchantName: 'F Corporation', mid: '38218329', createDate: '', accountBalance: '812934891234', tn: '2', numberofTransaction: '21', balanceAfterSettlement: '87123712'},
				{merchantName: 'G Corporation', mid: '98129122', createDate: '', accountBalance: '812934891234', tn: '1', numberofTransaction: '12', balanceAfterSettlement: '87123712'}
				];
			for (shj of shangjia){
					var newShangjia = new mM(shj);
					newShangjia.save();
			}
		},

		merchantDetails: (req, res)=>{
			mM.findOne({slug: req.params.slug}, (err, shj)=>{
				if (err)
					throw err;
				res.render('pages/merchantDetails', {shj:shj});
			});
		},

		xinjianShanghu: (req, res)=>{
			res.render('pages/xinjianShanghu');
		},

		loe: (req, res)=>{
			res.render('pages/loe', {shj:shj});
		},

		create: (req, res)=>{

			// Create from model
			const sj = new mM({
				merchantName: req.body.merchantName,		// $Pay *must be same as name in Model* = $_POST['Pay'];
				mid: req.body.mid,
				accountBalance: req.body.accountBalance,
				tn: req.body.tpn,
				createDate: req.body.creationDate
			//	mid: req.body.mid
			//	req.body is the same as POSTfromWebForm or $_POST['']
			});

			 sj.save((err)=>{
					if (err)
						throw err;
					res.redirect("/merchants");	// res.redirect(`/events/${sj.slug}`);
				});

		},

		deleteMerchant: (req, res)=>{
			mM.remove({slug: req.params.slug}, (err)=>{
				if (err)
					throw err;

				res.redirect('/merchants');
			});
		}
};