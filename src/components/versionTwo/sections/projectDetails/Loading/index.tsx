export default function LoadingDetail() {
	return (
		<div className="min-h-screen bg-slate-50 flex items-center justify-center">
			<div className="animate-pulse flex flex-col items-center">
				<div className="w-16 h-16 bg-slate-200 rounded-full mb-4" />
				<div className="h-4 w-32 bg-slate-200 rounded" />

				<p className="mt-4 text-slate-500">
					Loading project details...
				</p>
			</div>
		</div>
	);
}
